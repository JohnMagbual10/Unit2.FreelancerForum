const freelancers = []; // Array to store freelancer data
let totalStartingPrice = 0; // Total starting price of all freelancers

function addFreelancer(name, occupation, startingPrice) {
  // Create a new freelancer object
  const freelancer = { name, occupation, startingPrice };
  // Add the freelancer to the array
  freelancers.push(freelancer);
  // Update the total starting price
  totalStartingPrice += startingPrice;
  // Calculate the average starting price
  const averagePrice = totalStartingPrice / freelancers.length;
  // Display the average starting price
  document.getElementById('average-price').textContent = `The average starting price: $${averagePrice.toFixed(2)}`;
  // Display the new freelancer in the list
  const freelancersContainer = document.querySelector('.freelancers');

  const freelancerElement = document.createElement('div');
  freelancerElement.classList.add('freelancer');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  const titleNames = ['Name', 'Occupation', 'Price'];
  titleNames.forEach(titleName => {
    const titleHeading = document.createElement('h3');
    titleHeading.textContent = titleName;
    titleDiv.appendChild(titleHeading);
  });

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('details');

  const nameElement = document.createElement('p');
  nameElement.classList.add('name');
  nameElement.textContent = name;

  const occupationElement = document.createElement('p');
  occupationElement.classList.add('occupation');
  occupationElement.textContent = occupation;

  const startingPriceElement = document.createElement('p');
  startingPriceElement.classList.add('starting-price');
  startingPriceElement.textContent = `$${startingPrice}`;

  detailsDiv.appendChild(nameElement);
  detailsDiv.appendChild(occupationElement);
  detailsDiv.appendChild(startingPriceElement);

  freelancerElement.appendChild(titleDiv);
  freelancerElement.appendChild(detailsDiv);

  freelancersContainer.appendChild(freelancerElement);
}

// Add initial freelancers
addFreelancer('Alice', 'Writer', 30);
addFreelancer('Bob', 'Teacher', 50);

// Periodically add new freelancers
setInterval(() => {
  const names = ['Carol', 'David', 'Emily', 'Frank'];
  const occupations = ['Programmer', 'Designer', 'Artist', 'Photographer'];
  const startingPrices = [70, 40, 60, 25];
  const randomIndex = Math.floor(Math.random() * names.length);
  addFreelancer(names[randomIndex], occupations[randomIndex], startingPrices[randomIndex]);
}, 5000); // Add a new freelancer every 5 seconds
