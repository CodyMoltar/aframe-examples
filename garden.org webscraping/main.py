from selenium import webdriver
from selenium.webdriver.common.by import By
import requests
import random
import json

# Set the options for the Selenium webdriver, like running it headless, or with a certain resolution
options = {}

# create a new driver object, set the path to the driver (this one is specific to the webbrowser installed on your computer)
driver = webdriver.Chrome(executable_path='chromedriver.exe', options=options)

# create an empty list, we use this to store the information we get when scraping the site
new_list = []

# a function that downloads an image
def download_image(url):

    # get the image data with the request.get function and filter out the content
    img_data = requests.get(url).content
    # get the precise image name by splitting the url at the / and getting the last item in the list 
    image_name = url.split('/')[-1]
    # append the image name string to the new_list list we created earlier
    new_list.append(image_name)
    # save the image to the /photos/ folder
    with open('photos/' + image_name, 'wb') as handler:
        handler.write(img_data)

# loop through number 0 - 100
for i in range(100):

    # get a random number between 0 and 5000000
    random_number = str(random.randint(0, 500000))
    # define the base URL of the website
    garden_url = 'https://garden.org/plants/photo/'
    # get the webcontent from the url
    driver.get(garden_url + random_number)

    # find the div with card-body
    card_body = driver.find_element(By.CLASS_NAME, 'card-body')

    # get the url of the image inside of the card_body
    url = card_body.get_attribute('innerHTML').split('"')

    # execute the download_image function and pass in the url to the image
    download_image('https://garden.org/' + url[1])

# when we ended the loop and all the photos are downloaded we have to put the content of the list in a json file
# on the website we use the json file to know the names of the images
with open('photos/photos.json', 'w') as f:
    json.dump(new_list, f)