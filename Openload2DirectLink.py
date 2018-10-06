-- Note
# Kindly add your username and key in username and key variable by creating an api request frpm openload.co

from openload import OpenLoad
import webbrowser
from sys import argv 

username = ''
key = ''

ol = OpenLoad(username, key)

url = "https://www.google.com"
if len(argv) == 2:
    url = argv[1]
else:
   print("ERROR")

file_id = url[22:33]
print(file_id)
# Get a download ticket and captcha url.
preparation_resp = ol.prepare_download(file_id)
ticket = preparation_resp.get('ticket')

# Sometimes no captcha is sent in openload.co API response.
captcha_url = preparation_resp.get('captcha_url')

if captcha_url:
    # Solve captcha.
    captcha_response = solve_captcha(captcha_url)
else:
    captcha_response = ''

download_resp = ol.get_download_link(file_id, ticket, captcha_response)
direct_download_url = download_resp.get('url')

# Process download url.
webbrowser.open(direct_download_url)
