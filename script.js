function checkPassword() {
    const enteredPassword = document.getElementById('password').value;

    // Replace 'qa2024' with the actual password you want
    if (enteredPassword === 'qa2024') {
        document.getElementById('passwordForm').style.display = 'none';
        document.getElementById('links').style.display = 'block';

        // Clear existing content in the links div
        document.getElementById('links').innerHTML = '';

        // Add the new links
        document.getElementById('links').innerHTML += `
            <div class="column">
                <!-- Left column links -->                
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3nlEgsKlRQIvxLJwsV4QGyXA3qbsGAH_lC68G25-DlBBjlg/viewform" class="link" target="_blank">Form 2024</a>
                <a href="https://q-a-notes.vercel.app/"  class="link" target="_blank">Drop-Down-reasons</a>                               
                <a href="https://docs.google.com/presentation/d/1ceDoOM9o5h_nSmroHRUc-3bwHi6_uusU6HIOqEqhR1c/edit#slide=id.gc6fa3c898_0_0" class="link" target="_blank">HP MBR Jim's Link</a>
                <a href="https://drive.google.com/file/d/1yUR_25xjqSukP9nVj0hvsKX0pYMMkaZi/view?usp=sharing" class="link" target="_blank">Training Guide</a>
                <a href="https://docs.google.com/spreadsheets/d/1pISOhvq7_DxiHVcbkxV1Kf85NOcCj6rntVihhUSkCzI/edit?usp=sharing" class="link" target="_blank">HP WNS Responses certificate</a>
            </div>

            <div class="column">
                <!-- Right column links -->
                
                <a href="https://docs.google.com/spreadsheets/d/1a-H17ku4-c1y5rG2P2MAFb4Zvgqws7Z3O1FQ_Sem8XY/edit#gid=1243467041" class="link" target="_blank">2023 Answers</a>
                <a href="https://q-a-notes.vercel.app/" class="link" target="_blank">Dropdown-discriptions 2024</a>
                <a href="https://forms.gle/JwKRo6hWLydqLcFN8" class="link" target="_blank">Certification WNS</a> 
                <a href="https://docs.google.com/spreadsheets/d/1xjwVz9Jmrt3GX2WQe7RPkETzFincwWk2a1vMxYLZZZs/edit?usp=sharing" class="link" target="_blank">New Responses 2024</a>
                <a href="https://docs.google.com/spreadsheets/d/1h29DVUMt4As3BSzEUyH2O520goHDdF4mbsb9Agcdrfw/edit?usp=sharing" class="link" target="_blank">Weekly - Q&A Calls  (Responses)</a>
                <a href="https://forms.gle/P9cpF5Kc6DPR3QT16" class="link" target="_blank">Weekly - Q&A Calls</a>
            </div>
            </div>
        `;
    } else {
        alert('Incorrect password. Please try again, or ask Junior for help.');
    }
}
