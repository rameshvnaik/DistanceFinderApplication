
function calRoute(){  
    const  from=$("#from").val()
    const  to=$("#to").val()
    console.log(from);
 $.ajax({
     type: 'GET',
     url: 'https://api.distancematrix.ai/maps/api/distancematrix/json?origins='+from+'&destinations='+to+'&key=qS0QGJHDVFpRZs5qFSd9Xbd24k6sX',
     success: function (data, status, xhr) {
         const response= data.rows[0].elements[0];
         $("#output").text("distance between "+from+" to " +to+" is " +response.distance.text)
       console.log('data: ', data.rows[0].elements[0]);
     }
   });
 
 
 
 }
 