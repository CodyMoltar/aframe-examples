from selenium import webdriver
from selenium.webdriver.common.by import By
import requests
import random
import json

options = {

}

driver = webdriver.Chrome(executable_path='chromedriver.exe', options=options)

new_list = []

def download_image(url):
    img_data = requests.get(url).content
    image_name = url.split('/')[-1]
    new_list.append(image_name)
    with open('photos/' + image_name, 'wb') as handler:
        handler.write(img_data)

for i in range(100):

    random_number = str(random.randint(0, 500000))
    garden_url = 'https://garden.org/plants/photo/'
    driver.get(garden_url + random_number)

    card_body = driver.find_element(By.CLASS_NAME, 'card-body')

    url = card_body.get_attribute('innerHTML').split('"')

    

    download_image('https://garden.org/' + url[1])


with open('photos/photos.json', 'w') as f:
    json.dump(new_list, f)