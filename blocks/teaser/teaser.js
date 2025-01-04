export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('teaser__wrapper');

  const leftContainer = block.querySelector(':scope > div > div:nth-of-type(1)');
  const rightContainer = block.querySelector(':scope > div > div:nth-of-type(2)');
  const leftPicture = leftContainer.querySelector('picture');
  if (leftContainer) {
    leftContainer.className = leftPicture ? 'teaser-image' : 'teaser-content';
    wrapper.append(leftContainer);
  }
  if (rightContainer) {
    rightContainer.className = leftPicture ? 'teaser-content' : 'teaser-image';
    wrapper.append(rightContainer);
  }

  wrapper.classList.add(leftPicture ? 'teaser__wrapper--left-image' : 'teaser__wrapper--right-image');
  block.append(wrapper);
}
