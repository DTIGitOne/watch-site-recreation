export function addWatch(id) {

    const watch = {
        id: id,
        amount: 1
    }

    const watchesCart = JSON.parse(localStorage.getItem('watches')) || [];

    const existingWatch = watchesCart.find((watchItem) => watchItem.id === id);

    if (existingWatch) {
        existingWatch.amount += 1;
    } else {
        watchesCart.push(watch);
    }

    localStorage.setItem('watches', JSON.stringify(watchesCart));
}