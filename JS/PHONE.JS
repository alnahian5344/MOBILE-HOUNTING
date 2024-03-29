console.log('PHONE HUNTING')

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}
const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAll = document.getElementById('show-all');
    if (phones.length > 12) {
        showAll.classList.remove('hidden')
    } else { showAll.classList.add('hidden'); }
    phones = phones.slice(0, 12);
    phones.forEach(phone => {
        // console.log(phone)
        //  CREATE DIV
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card  bg-gray-100 p-4 shadow-xl  `;
        phoneCard.innerHTML = `<figure><img src=${phone.image} alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>`;
        phoneContainer.appendChild(phoneCard);
    })
    loadingContinner(false);
}

const handleSearch = () => {
    loadingContinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText);
}



const loadingContinner = (isLoading) => {
    const loadContain = document.getElementById('loading-container');
    // console.log('loadded');
    if (isLoading) {
        loadContain.classList.remove('hidden');
    } else {
        loadContain.classList.add('hidden');
    }
}