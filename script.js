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
                <a href="https://docs.google.com/spreadsheets/d/1a-H17ku4-c1y5rG2P2MAFb4Zvgqws7Z3O1FQ_Sem8XY/edit#gid=1243467041" class="link" target="_blank">Old Responses</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3nlEgsKlRQIvxLJwsV4QGyXA3qbsGAH_lC68G25-DlBBjlg/viewform" class="link" target="_blank">Form 2024</a>
                <a href="https://drive.google.com/file/d/1yUR_25xjqSukP9nVj0hvsKX0pYMMkaZi/view?usp=sharing" class="link" target="_blank">Training Guide</a>
                <a href="https://docs.google.com/spreadsheets/d/1XgZTnQ8nd7V_9tWeRQxE7Yx8B8mzc0GtsciOTm5xhDQ/edit#gid=60603194" class="link" target="_blank">ASAP</a>
                
                <a href="https://docs.google.com/presentation/d/1ceDoOM9o5h_nSmroHRUc-3bwHi6_uusU6HIOqEqhR1c/edit#slide=id.gc6fa3c898_0_0" class="link" target="_blank">HP MBR Jim's Link</a>
                <a href="https://docs.google.com/spreadsheets/d/1pISOhvq7_DxiHVcbkxV1Kf85NOcCj6rntVihhUSkCzI/edit?usp=sharing" class="link" target="_blank">HP WNS Responses certificate</a>
            </div>

            <div class="column">
                <!-- Right column links -->
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6Zo2XXP-otpbMzScXIwSqv3qFYBmsl2OS7Swo389ZpzCG5w/viewform" class="link" target="_blank">2023 Form</a>
                <a href="https://docs.google.com/spreadsheets/d/1a-H17ku4-c1y5rG2P2MAFb4Zvgqws7Z3O1FQ_Sem8XY/edit#gid=1243467041" class="link" target="_blank">2023 Answers</a>
                <a href="https://q-a-notes.vercel.app/" class="link" target="_blank">Dropdown-discriptions 2024</a>
                <a href="https://forms.gle/JwKRo6hWLydqLcFN8" class="link" target="_blank">Certification WNS</a>
                <a href="https://forms.gle/8kdJ1BsLQntSVKDF8" class="link" target="_blank">Group Certification WNS</a>
                <a href="https://ipinfo.io/" class="link" target="_blank">Search an IP-address</a>
                 <a href="https://docs.google.com/spreadsheets/d/1xjwVz9Jmrt3GX2WQe7RPkETzFincwWk2a1vMxYLZZZs/edit?usp=sharing" class="link" target="_blank">New Responses 2024</a>
            </div>
        `;
    } else {
        alert('Incorrect password. Please try again, or ask Junior for help.');
    }
}
