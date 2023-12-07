function init() {
  const contentElement = document.querySelector('#content');

  const container = document.createElement('div');
  container.classList.add('container');

  const pageContentElement = pageContent();

  container.append(pageContentElement);
  contentElement.append(container);


  
  // contentElement.append(mainNewsItem1, mainNewsItem2);
}

init();

function newsItem(data) {
  // const category = data.category;
  // const title = data.title;
  // const date = data.date;
  // const imageUrl = data.imageUrl;
  // const url = data.url;

  const { category, title, date, imageUrl, url } = data;

  if (!title || !url) {
    return '';
  }

  const element = document.createElement('div');
  element.classList.add('news-item');

  const link = document.createElement('a');
  link.href = url;
  link.classList.add('news-item-link');

  element.append(link);

  if (imageUrl) {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('news-item-image-wrapper');
    
    const image = document.createElement('img');
    image.src = imageUrl;
    image.classList.add('news-item-image');
    
    imageWrapper.append(image);
    link.append(imageWrapper);
  }

  const content = document.createElement('div');
  content.classList.add('news-item-content');

  if (category) { 
    const categoryElement = document.createElement('span');
    categoryElement.classList.add('news-item-category');
    categoryElement.textContent = category;
    content.append(categoryElement);
  }

  const titleElement = document.createElement('h2');
  titleElement.classList.add('news-item-title');
  titleElement.textContent = title;
  content.append(titleElement);

  if (date) {
    const dateElement = document.createElement('time');
    dateElement.classList.add('news-item-date');
    dateElement.textContent = date;
    dateElement.datetime = date;

    content.append(dateElement);
  }

  link.append(content);

  return element;
}

function pageContent() {
  const contentElement = document.createElement('div');
  contentElement.classList.add('content-wrapper');

  const mainElement = document.createElement('main');
  mainElement.classList.add('main-content');

  const newsSection = document.createElement('section');
  newsSection.classList.add('news-section');

  const mainNewsElement = document.createElement('div');
  mainNewsElement.classList.add('main-news');

  const mainNewsItem1 = newsItem({
    title: 'Ar „ChatGPT“ užims mūsų darbo vietas?',
    url: '#',
    category: 'AI & Deep Learning',
    imageUrl: 'dogs.webp'
  });
  
  const mainNewsItem2 = newsItem({
    title: 'Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?',
    date: '2023-09-02',
    url: '#',
    imageUrl: 'https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg',
    category: 'Naujienos',
  });

  mainNewsElement.append(mainNewsItem1, mainNewsItem2);
  
  const secondaryNewsElement = document.createElement('div');
  secondaryNewsElement.classList.add('secondary-news');

  const secondaryNewsItem1 = newsItem({
    title: 'Ar „ChatGPT“ užims mūsų darbo vietas?',
    url: '#',
    category: 'AI & Deep Learning',
    imageUrl: 'dogs.webp'
  });
  
  const secondaryNewsItem2 = newsItem({
    title: 'Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?',
    date: '2023-09-02',
    url: '#',
    imageUrl: 'https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg',
    category: 'Naujienos',
  });

  const secondaryNewsItem3 = newsItem({
    title: 'Ar „ChatGPT“ užims mūsų darbo vietas?',
    url: '#',
    category: 'AI & Deep Learning',
    imageUrl: 'dogs.webp'
  });
  
  const secondaryNewsItem4 = newsItem({
    title: 'Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?',
    date: '2023-09-02',
    url: '#',
    imageUrl: 'https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg',
    category: 'Naujienos',
  });

  secondaryNewsElement.append(secondaryNewsItem1, secondaryNewsItem2, secondaryNewsItem3, secondaryNewsItem4);

  newsSection.append(mainNewsElement, secondaryNewsElement);

  mainElement.append(newsSection);

  contentElement.append(mainElement);

  return contentElement;
}