// dynamic buttons 
function buttons (){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>{
        dynamicButtonsLoad(data.categories);
    })
}
const dynamicButtonsLoad = (buttons)=>{

    console.log(buttons);
    for(let button of buttons){
        console.log(button);
        const buttonsContainer = document.getElementById("dynamic-buttons");
        const div = document.createElement("div");
        div.innerHTML = `
         <button id="btn-${button.category_id}" onclick="loadId(${button.category_id})" class=" hover:bg-[#FF1F3D] hover:text-white
         rounded-md btn btn-xs text-2xl p-4 ">${button.category}</button>
        
        
        `;
        buttonsContainer.appendChild(div);
    }
}
// 
        // loadeId
            const loadId = (id)=>{
                console.log(id);

                const urls = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
                fetch(urls)
                .then(res=>res.json())
                .then(data=>{
                    
                   removeActive ()
                  
                    // active classs
                    const btn=document.getElementById(`btn-${id}`);
                   
                    btn.classList.add('active');
                   
                    dynamicVideos(data.category)
                })
            }
            // remove class 
            function removeActive (){
                const activeButtons=document.getElementsByClassName("active");
                for(let btn of activeButtons){
                    btn.classList.remove('active');
                    
                }
            }

            // 
        // 
    // dynamic loaded videos
        function videos (){
            fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
            .then(res=>res.json())
            .then(data=>{
                document.getElementById("all").classList.add('active');
                dynamicVideos(data.videos);
            })
        }
        const dynamicVideos = (videos)=>{
            
            console.log(videos);
            const dynamicVideosContainer = document.getElementById("dynamic-videos");
            dynamicVideosContainer.innerHTML="";
            if(videos.length==0){
                dynamicVideosContainer.innerHTML=`
                 <div class="col-span-full ">
                            <img class="mx-auto" src="assects/Icon.png" alt="">
                            <h2 class="text-4xl text-center">Oops!! Sorry, There is no content here</h2>
                            
                        </div>
                `;
                return;
            }
            for(let video of videos){
                console.log(video);
                const div = document.createElement("div");
                div.innerHTML = `
    <div class=" shadow-sm">
  <figure>
    <img class="w-full h-[200px] object-cover"
      src="${video.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <div class="flex gap-3">
        <div>
            <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-7 rounded-full ">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
        </div>
        <div>
            <h1>Building a Winning UX Strategy</h1>
            <h1>Using the Kano Model</h1>
            <p>${video.authors[0].profile_name}</p>
            <p>${video.others.views}</p>
        </div>
    </div>
    <button onclick="loadVideoDetails('${video.video_id}')" class="btn btn-xs text-xl py-4">Show Details</button>
  </div>
 
</div>
                
                
                
                `;

                dynamicVideosContainer.appendChild(div);
            }
        }
    // 
        const loadVideoDetails = (videoId)=>{
            console.log(videoId);
            const url=`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
                loadModalDetails(data.video)
            })
        }
        const loadModalDetails = (videoss)=>{
            console.log(videoss);
            document.getElementById("my_modal_1").showModal();
            const detailsContainer=document.getElementById("details-container");
            detailsContainer.innerHTML=`
            <div class="card bg-base-100 image-full w-auto shadow-sm">
  <figure>
    <img
      src="${videoss.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${videoss.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    
  </div>
</div>
            
            
            `;
        }

    // 
buttons();







// category_id: '1001', video_id: 'aaal', thumbnail: 'https://i.ibb.co/hdtZYbB/enchnting.jpg', title: 'Enchanted Harmonies', a



// category
// : 
// "Music"
// category_id
// : 
// "1001"


// // authors
// 0
// // : 
// // {profile_picture: 'https://i.ibb.co/YZN9rQZ/tina.jpg', profile_name: 'Tina Fey', verified: false}
// // length
// // : 
// // 1


// others
// : 
// {views: '241K', posted_date: ''}