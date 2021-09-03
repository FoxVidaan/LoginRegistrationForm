const filterButtons = document.querySelectorAll('.filterButton');
const itemBoxs = document.querySelectorAll('.itemBox');

for (const filterButton of filterButtons) {
    filterButton.addEventListener('click', () => {
        const activeFilterButton = document.querySelector(".filterButton.active");
        activeFilterButton.classList.remove('active');
        filterButton.classList.add('active');

        for (const itemBox of itemBoxs) {
            const filter = filterButton.getAttribute("data-filter");
            const item = itemBox.getAttribute("data-item");
            console.log(item + " " + filter)

            itemBox.style.display = 'flex';

            if (item !== filter && "all" !== filter) {
                itemBox.style.display = 'none';
            }
        }
    });
}