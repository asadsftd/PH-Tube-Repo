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
         <button class=" hover:bg-[#FF1F3D] hover:text-white
         rounded-md btn btn-xs text-2xl p-4 ">${button.category}</button>
        
        
        `;
        buttonsContainer.appendChild(div);
    }
}
// 
    // dynamic loaded videos
        function videos (){
            fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
            .then(res=>res.json())
            .then(data=>{
                dynamicVideos(data.videos);
            })
        }
        const dynamicVideos = (videos)=>{
            console.log(videos);
            const dynamicVideosContainer = document.getElementById("dynamic-videos");
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
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                
                
                
                `;

                dynamicVideosContainer.appendChild(div);
            }
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