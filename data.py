from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep
from bs4 import BeautifulSoup


def get_soup(url, delay=0):
    chrome_options = Options()
    chrome_options.add_argument("--disable-extensions")
    chrome_options.add_argument('--no-sandbox') 
    chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(chrome_options=chrome_options)
    driver.get(url)
    sleep(delay)
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    driver.close()
    return soup


def get_twilio_jobs_data():
    TWILIO_URL = 'https://www.twilio.com/company/jobs'
    twilio_soup = get_soup(TWILIO_URL)
    twilio_jobs_data = []
    for job in twilio_soup.find_all('a', class_='_job'):
        job_details = {}
        job_title = job.div.text.strip()
        job_details['title'] = job_title
        job_details['link'] = job.get('href')
        job_details['location'] = job.find('div', class_='_office').text
        job_details['company'] = 'Twilio'
        twilio_jobs_data.append(job_details)
    return twilio_jobs_data


def get_airbnb_jobs_data():
    AIRBNB_URL = 'https://careers.airbnb.com/#jobs'
    airbnb_soup = get_soup(AIRBNB_URL)
    airbnb_jobs_data = []
    query_tag = 'jobs-board__positions__list__item'
    for job in airbnb_soup.find_all('li', class_=query_tag):
        job_details = {}
        job_title = job.h3.text
        job_details['title'] = job_title
        job_details['link'] = job.a.get('href')
        job_details['location'] = job.span.text
        job_details['company'] = 'Airbnb'
        airbnb_jobs_data.append(job_details)
    return airbnb_jobs_data


def get_yext_jobs_data():
    YEXT_URL = 'https://www.yext.com/careers/open-positions/'
    yext_soup = get_soup(YEXT_URL, 3)
    yext_jobs_data = []
    for job in yext_soup.find_all('a', class_='jobs__post-item'):
        job_details = {}
        job_title = job.span.text
        job_details['title'] = job_title
        job_details['link'] = job.get('href')
        job_details['company'] = 'Yext'
        job_details['location'] = job.find('span', class_='jobs__post-city').text
        yext_jobs_data.append(job_details)
    return yext_jobs_data


def get_jobs_data(company):
    company_jobs_dict = {'twilio': get_twilio_jobs_data,
     'airbnb': get_airbnb_jobs_data,
     'yext': get_yext_jobs_data}
    if company not in company_jobs_dict:
        return None
    return company_jobs_dict[company]()
