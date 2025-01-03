export default function decorate(block) {
  const wrapper = block.querySelector(':scope > div');
  wrapper.className = 'hero__wrapper';
  const contentContainer = block.querySelector(':scope > div > div:nth-of-type(1)');
  const imageContainer = block.querySelector(':scope > div > div:nth-of-type(2)');
  if (imageContainer) {
    imageContainer.className = 'hero-image';
  }
  if (contentContainer) {
    contentContainer.className = 'hero-content__wrapper';

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');
    heroContent.append(...contentContainer.childNodes);

    contentContainer.append(heroContent);
  }

  const title = block.querySelector(':scope h1');
  if (title) {
    const innerHTML = title.innerHTML.trim();
    if (innerHTML.startsWith("<strong>") && innerHTML.includes("</strong>")) {
      let newInnerHtml = innerHTML.substring(0, innerHTML.indexOf("</strong>") + 9);
      newInnerHtml += "<span class='transparent-text'>" + innerHTML.substring(innerHTML.indexOf("</strong>") + 9) + "</span>";
      title.innerHTML = newInnerHtml;
    }
  }
}
