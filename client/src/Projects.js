import React from "react";


function Projects() {
  

  return (
    <div>
        <h2>Projects</h2>
          <div className="projects-div">
            <div className="st-box">
              <h2>Your Next Destination</h2>
              <p>On the home screen, the user can see the top ten citites in America on the side pane. They can also search any other city in America - and at a click - the user can view the city's top restaurants, top tourist attractions, and some local highlights. At the bottom of the selected city's page, the user can leave a review and view previous reviews left.</p>
                    <p><a href="https://github.com/lyssiewright/Map-Project">GitHub Repo</a></p> 
                    <p>Demonstration Video</p>
                    <p>Website</p>
            </div>
            <div className="nd-box">
              <h2>PixArt</h2>
              <p>PixArt allows users to either login or sign-up to create a personal account. Once logged in, the user can choose a pixel on a community canvas and select a color to create pictures with other users. The user can also see the most contested pixel and the top users.</p>
                    <p><a href="https://github.com/lyssiewright/PixArt-Project">GitHub Repo</a></p> 
                    <p>Demonstration Video</p>
                    <p><a href="https://phase-4-project-pixel-app.herokuapp.com/">Website</a></p>
                
            </div>
            <div className="rd-box">
              <h2>#OOTD</h2>
              <p>#OOTD or Outfit of the Day allows the user to either login or sign-up to create a personal account. Once logged in, the user is redirected to their profile page or "closet". On their profile page, the user can view previously uploaded outfits and even "shuffle" those existing outfits. When navigating to the side pane the user can see several options including the option to upload a new outfit, search other users of the app, and view friends' closets.</p>
                    <p><a href="https://github.com/lyssiewright/OOTD-phase-5-project">GitHub Repo</a></p> 
                    <p><a href="https://www.youtube.com/watch?v=ckJV2CHXe38">Demonstration Video</a></p>
                    <p>Website</p>
            </div>
          </div>

    </div>
    
  );
}

export default Projects;