function checkPassword() {
    const enteredPassword = document.getElementById('password').value;
    
    // Replace 'qa2024' with the actual password you want
    if (enteredPassword === 'qa2024') {
        document.getElementById('passwordForm').style.display = 'none';
        document.getElementById('links').style.display = 'block';

        // Add your links dynamically here, with styling for spacing and target="_blank"
        document.getElementById('links').innerHTML += `
            <a href="https://docs.google.com/spreadsheets/d/1a-H17ku4-c1y5rG2P2MAFb4Zvgqws7Z3O1FQ_Sem8XY/edit#gid=1243467041" style="margin-bottom: 10px; display: block;" target="_blank">Old Responses</a><br>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3nlEgsKlRQIvxLJwsV4QGyXA3qbsGAH_lC68G25-DlBBjlg/viewform" style="margin-bottom: 10px; display: block;" target="_blank">Form 2024</a><br>
            <a href="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*G0_JqUNK2RfFsN2F.jpg" style="margin-bottom: 10px; display: block;" target="_blank">Do you have a Link?</a><br>
            <a href="https://docs.google.com/spreadsheets/d/1m6LsOTaCli0s7Tz7_iTF8V2rr6gGHJUkigU6NfpPR2c/edit?resourcekey#gid=975602118;" target="_blank">New Responses 2024</a><br>
        `;
    } else {
        alert('Incorrect password. Please try again.');
    }
}
