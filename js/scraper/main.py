import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

def create_directory(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

def download_file(url, folder):
    local_filename = os.path.join(folder, url.split('/')[-1])
    with requests.get(url, stream=True) as r:
        with open(local_filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    return local_filename

def download_html(url, folder):
    local_filename = os.path.join(folder, urlparse(url).path.strip('/').replace('/', '_') + '.html')
    with requests.get(url) as r:
        with open(local_filename, 'w', encoding='utf-8') as f:
            f.write(r.text)
    return local_filename

def is_valid_url(url):
    parsed = urlparse(url)
    return bool(parsed.netloc) and bool(parsed.scheme)

def get_all_files(url, file_folder, html_folder):
    create_directory(file_folder)
    create_directory(html_folder)
    
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    links = soup.find_all('a', href=True)
    backlinks = []

    for link in links:
        file_url = urljoin(url, link['href'])
        if is_valid_url(file_url):
            if file_url.endswith(('.pdf', '.jpg', '.jpeg', '.png', '.gif', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx')):
                try:
                    print(f'Downloading: {file_url}')
                    download_file(file_url, file_folder)
                except Exception as e:
                    print(f'Failed to download {file_url}: {e}')
            elif file_url.endswith('.html') or urlparse(file_url).path == '':
                try:
                    print(f'Downloading HTML: {file_url}')
                    download_html(file_url, html_folder)
                except Exception as e:
                    print(f'Failed to download HTML {file_url}: {e}')
            elif urlparse(file_url).netloc == urlparse(url).netloc:
                backlinks.append(file_url)

    with open(os.path.join(file_folder, 'backlinks.txt'), 'w') as f:
        for backlink in backlinks:
            f.write(f"{backlink}\n")

if __name__ == "__main__":
    target_url = input("Enter the URL of the website to scrape: ")
    current_directory = os.path.dirname(os.path.abspath(__file__))
    download_folder = os.path.join(current_directory, 'downloaded_files')
    html_folder = os.path.join(current_directory, 'html_files')
    get_all_files(target_url, download_folder, html_folder)