const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`);
    console.log(response.data);
    return response.data;
}


// Create some constants to hold DOM elements
const DOM_Elements = {
    ranger_list: '.ranger-list'
}

// Create Ranger List HTML
const create_list = ( id, name ) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend',html);
}

// Functions to load data and clear data and display html
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML='';
}