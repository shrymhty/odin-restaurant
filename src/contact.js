export function renderContact() {
    const contactBtn = document.querySelector('#contact');
    contactBtn.style.textDecoration = 'underline';

    const content = document.querySelector('#content');
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'contentDiv');

    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const availableHeight = window.innerHeight - headerHeight;

    mainDiv.style.minHeight = `${availableHeight}px`
    mainDiv.style.background = '#f6e7d2'
    mainDiv.style.width = '100%';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';

    const title = document.createElement('h1');
    title.innerText = 'Contact Us';
    title.style.fontFamily = '"Cormorant Unicase", serif';
    title.style.color = '#946b42';
    title.style.marginTop = '20px';
    title.style.textAlign = 'center';
    mainDiv.appendChild(title);

    const contactDiv = document.createElement('div');
    mainDiv.style.width = '100%';
    mainDiv.style.display = 'flex';

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = `
        <p id='phno'><b>Phone Number:</b> +1 9993332718</p>
        <p id='email'><b>Email:</b> moonmilk.cafe@gmail.com</p>
        <p id='instagram'><b>Instagram Handle:</b> @moonmilk_cafe</p>
        <p id='twitter'><b>X:</b> moonmilk_x</p>
    `
    contactDiv.appendChild(contactInfo);
    mainDiv.appendChild(contactDiv);

    content.appendChild(mainDiv);
}