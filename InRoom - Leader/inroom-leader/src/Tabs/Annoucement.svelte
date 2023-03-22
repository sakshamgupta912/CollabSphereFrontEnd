<script>
   import ComposeAnnouncement from "../Overlay in Tabs/ComposeAnnouncement.svelte";
    let overlay_announcement_overlay = false;
    function handleClick(){}   
</script>
<ComposeAnnouncement>
    
</ComposeAnnouncement>
<div class="AnnouncementExample">
    
    <img src="AnnouncementExample.png" alt="AnnouncementExample" />
    <button href="#" class="float" on:click={handleClick}
        ><img src="Announcement icon.png" alt="Announcement" /></button
    >
</div>


<style>
    .AnnouncementExample {
        text-align: center;
    }
    .AnnouncementExample img {
        width: 80%;
    }

    * {
        padding: 0;
        margin: 0;
    }

    .float {
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 40px;
        right: 40px;
        background-color: rgba(255, 87, 87, 0.76);

        border-radius: 50px;
        text-align: center;
        box-shadow: 2px 2px 3px #999;
    }

    .my-float {
        margin-top: 22px;
    }

    .float img {
        margin: 10%;
    }
</style>
