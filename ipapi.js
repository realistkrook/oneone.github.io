
   const apiKey = '812da59f6c99c0e1'; 
      
   const getUserInfo = async () => {
     try {
       const baseUrl = 'https://ipapi.co/json/';
       const url = apiKey ? `${baseUrl}?apiKey=${apiKey}` : baseUrl;

       const response = await fetch(url);
       const data = await response.json();
       const ip = data.ip;
       const city = data.city;
       const country = data.country_name;

       const userInfo = `Your IP address is: ${ip}.<br> Your approximate location is: ${city}, ${country}`;
       document.getElementById('user-info').innerHTML = userInfo;
     } catch (error) {
       console.error('Error fetching user info:', error);
       document.getElementById('user-info').innerHTML = 'Error retrieving information.';
     }
   };

   getUserInfo();