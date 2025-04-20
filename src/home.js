import cafe from './cafe.png';

export function renderHome() {
    const homeBtn = document.querySelector('#home');
    homeBtn.style.textDecoration = 'underline';

    const content = document.querySelector('#content');
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'homeDiv');

    // ✅ Updated styles to prevent horizontal overflow
    mainDiv.style.display = 'flex';
    mainDiv.style.width = '100%';  // Changed from 100vw to 100%
    mainDiv.style.boxSizing = 'border-box';
    mainDiv.style.overflow = 'hidden';

    // Optional: Set overflow-x hidden on body or content
    document.body.style.overflowX = 'hidden';

    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const availableHeight = window.innerHeight - headerHeight;

    const cafeImg = new Image();
    cafeImg.src = cafe;
    cafeImg.style.height = `${availableHeight}px`;
    cafeImg.style.width = `${availableHeight}px`;
    cafeImg.style.objectFit = 'cover';
    mainDiv.appendChild(cafeImg);

    const description = document.createElement('div');
    description.style.boxSizing = 'border-box';
    description.style.overflowWrap = 'break-word';  // ensures text wraps
    description.style.wordBreak = 'break-word'; 
    description.innerHTML = `
        <h1>Welcome to <span style="text-decoration:underline;">Moonmilk Café</span></h1>
        <p style="font-size:1.3rem;">Enjoy the finest coffee and pastries in town.</p>
        <h2 style="margin-top: 20px; font-size: 1.5rem;">We're open everyday from 11am to 10pm!</h2>
        <h3 style ="margin-top: 40px;">Find us here: <a href="https://caves.org/virtualcave/moonmilk/">3838 Oak Boulevard, Charlotte, Arizona, 1096</a></h3>
    `;
    description.setAttribute('id', 'description');
    mainDiv.appendChild(description);

    content.appendChild(mainDiv);
}
