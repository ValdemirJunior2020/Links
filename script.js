function checkPassword() {
    const enteredPassword = document.getElementById('password').value;

    // Replace 'qa2024' with the actual password you want
    if (enteredPassword === 'qa2024') {
        document.getElementById('passwordForm').style.display = 'none';
        document.getElementById('links').style.display = 'flex';
        document.getElementById('links').innerHTML = '';

        // Add the new links and emails
        document.getElementById('links').innerHTML += `
            <div class="column">
                <!-- Left column links -->
                <div class="box">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3nlEgsKlRQIvxLJwsV4QGyXA3qbsGAH_lC68G25-DlBBjlg/viewform" class="link" target="_blank">Form 2024</a>
                    <a href="https://drive.google.com/file/d/1yUR_25xjqSukP9nVj0hvsKX0pYMMkaZi/view?usp=sharing" class="link" target="_blank">Training Guide</a>
                    <a href="https://docs.google.com/presentation/d/1ceDoOM9o5h_nSmroHRUc-3bwHi6_uusU6HIOqEqhR1c/edit#slide=id.gc6fa3c898_0_0" class="link" target="_blank">HP MBR Jim's Link</a>
                    <a href="https://q-a-notes.vercel.app/" target="_blank">Drop-Down-reasons</a>
                </div>
            </div>
            <div class="column">
                <!-- Middle column links -->
                <div class="box">
                    <a href="https://docs.google.com/spreadsheets/d/1a-H17ku4-c1y5rG2P2MAFb4Zvgqws7Z3O1FQ_Sem8XY/edit#gid=1243467041" class="link" target="_blank">2023 Answers</a>
                    <a href="https://q-a-notes.vercel.app/" class="link" target="_blank">Dropdown-discriptions 2024</a>
                    <a href="https://forms.gle/JwKRo6hWLydqLcFN8" class="link" target="_blank">Certification WNS</a>
                    <a href="https://docs.google.com/spreadsheets/d/1Fe1dVckSGRVvnD8sSZf-6wRqTjOLrK_yL5gkPLP40dQ/edit?resourcekey#gid=260355918" class="link" target="_blank">Missing Link</a>
                </div>
            </div>
            <div class="column">
                <!-- Right column emails -->
                <div class="box">
                    <h3>Call Center emails</h3>
                    <p>WNS - <a href="mailto:HotelPlanner-Operations@wns.com">HotelPlanner-Operations@wns.com</a></p>
                    <p>Ideal - <a href="mailto:hpstaff@idealccs.com">hpstaff@idealccs.com</a></p>
                    <p>Buwelo - <a href="mailto:leadership.hotelplanner@buwelo.com">leadership.hotelplanner@buwelo.com</a></p>
                    <p>Concentrix - <a href="mailto:Delivery_PH_HotelPlanner@concentrix.com">Delivery_PH_HotelPlanner@concentrix.com</a></p>
                    <p>TEP - <a href="mailto:Teleperformance-HP_Operations@teleperformance.com">Teleperformance-HP_Operations@teleperformance.com</a></p>
                </div>
            </div>
        `;
    } else {
        alert('Incorrect password. Please try again, or ask Junior for help.');
    }
}
