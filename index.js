// alert('hello');
    const form = document.getElementById('form');
    form.addEventListener('submit', (e)=>{
    var myname = document.getElementById('myname').value;
    var mypassword = document.getElementById('password').value;
    if(myname === ''|| mypassword === ''){
    e.preventDefault();
    alert("Please fill in both Username and password fields.");
    } 
    else{
        window.location.href = './login.html';
    }
    localStorage.setItem(myname, 'Username');
    localStorage.setItem(mypassword, 'passcode');
});
    const form2 = document.getElementById('form2');
    form2.addEventListener('submit', (e)=>{
        e.preventDefault();
    var username = document.getElementById('loginname').value;
    var password = document.getElementById('loginpassword').value;
    const StoredUsername = localStorage.getItem('Username');
    const StoredPassword =  localStorage.getItem('passcode');
    console.log(username, password, StoredUsername, StoredPassword, username === StoredUsername, password === StoredPassword)
    if(username === '' || password === ''){
        alert("Please fill in both Username and password fields.");
        return;
    }else if(username !== StoredUsername && password !== StoredPassword){
        e.preventDefault();
        alert("Please fill in both Username and password fields.");
        return;
        // window.location.href = './dashboard.html';
    }
});

