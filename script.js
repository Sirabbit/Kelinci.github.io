document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nama tidak boleh kosong!',
        });
    } else {
        fetch('bluearchivechar.json')
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const murid = data[randomIndex];
                document.getElementById('muridResult').innerText = `murid ${name} adalah ${murid.name}`;
                document.getElementById('muridImage').src = murid.image;
                document.getElementById('result').style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});
