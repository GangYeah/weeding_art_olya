function scrollToNextBlock() {
    const nextBlock = document.querySelectorAll('.block')[1];
    if (nextBlock) {
        nextBlock.scrollIntoView({ behavior: 'smooth' });
    }
}