document.getElementById('location-button').addEventListener('click', () => {
    // Scroll to the trust section
    document.querySelector('.trust').scrollIntoView({ behavior: 'smooth' });

    // Populate trust section with images and info
    const trusts = [
        {
            name: 'Arvi trust',
            address: 'Laxmi Nagar, Seelapadi,Dindigul - 624005.Tamil Nadu, India.',
            pincode: '625001',
            phone: '+91 94421 60475',
            email: 'arvitrust@gmail.com',
            img: src="images/charity1.jpg"
                },
        {
            name: 'Sanmarga gurukulam trust',
            address: '456 Dindigul Avenue',
            pincode: '650031',
            phone: '9639252893',
            email: 'https://www.keeranurgurukulam.org/?fullpage=1',
            img: src='images/charity2.jpg'
        },
        {
            name: 'coodutrust',
            address: 'H-83, R.M. Colony, Dindigul – 624 001 Tamil Nadu, India',
            pincode: '626081',
            phone: '91-4512461362',
            email: 'https://www.coodutrust.org/?fullpage=1',
            img: src='images/charity3.jpg'
        },
        {
            name: 'Seedstrust',
            address: 'H1/67-R.M.Colony,1st Cross, Dindigul, INDIA',
            pincode: '627001',
            phone: '7589089286',
            email: 'https://seedstrust.org.in/about-us/',
            img: src='images/charity4.jpg'
        },
        {
            name: 'Nikhil foundation',
            address: ' Malar’s Nikhilagam, 1/759, Nakkirar Street, Bharath Nagar, Tirupalai, Madurai - 625014',
            pincode: '624501',
            phone: '9003567532',
            email: 'https://seedstrust.org.in/about-us/',
            img: src='images/charity5.jpg'
        },
        {
            name: 'Dindigul Trust',
            address: '456 Dindigul Avenue,kothandhram nagar,Dindigal-625014',
            pincode: '624001',
            phone: '9683976271',
            email: 'https://www.mrtrust.org.in/',
            img: src='images/charity6.gif'
        },
        // Add more trust details here
    ];

    const trustSection = document.querySelector('.trust');
    trustSection.innerHTML = '';

    trusts.forEach(trust => {
        const div = document.createElement('div');
        div.className = 'trust-item';
        const img = document.createElement('img');
        img.src = trust.img; 
        img.alt = trust.name;

        const name = document.createElement('h3');
        name.textContent = trust.name;

        const address = document.createElement('p');
        address.textContent = `Address: ${trust.address}, Pincode: ${trust.pincode}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${trust.phone}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${trust.email}`;

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(address);
        div.appendChild(phone);
        div.appendChild(email);
        trustSection.appendChild(div);
    });
});

document.getElementById('add-item-button').addEventListener('click', () => {
    const newItemInput = document.createElement('div');
    newItemInput.className = 'item-input';

    const foodInput = document.createElement('input');
    foodInput.type = 'text';
    foodInput.placeholder = 'Food Item';

    const kgInput = document.createElement('input');
    kgInput.type = 'number';
    kgInput.placeholder = 'KG';

    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.placeholder = 'Phone No';

    newItemInput.appendChild(foodInput);
    newItemInput.appendChild(kgInput);
    newItemInput.appendChild(phoneInput);

    document.querySelector('.donate').insertBefore(newItemInput, document.getElementById('add-item-button'));
});

document.getElementById('donate-button').addEventListener('click', () => {
    alert('Congratulations!! Food Donated Successfully');
});

document.getElementById('home-icon').addEventListener('click', () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('points').addEventListener('click', () => {
    // Scroll to the store section
    document.querySelector('.store').scrollIntoView({ behavior: 'smooth' });
});
