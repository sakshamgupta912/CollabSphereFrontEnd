<script>
    import SubmitAssignment from "../Overlay in Tabs/SubmitAssignment.svelte";
</script>
<body>
    <SubmitAssignment></SubmitAssignment>
    <div class="AssignmentExample" >
        <img src="AssignmentExample.png" alt="AssignmentExample"  />    
    </div>
    </body>
    
    <style>
        .AssignmentExample{
            text-align: center;
          
        }
        .AssignmentExample img{
            width: 80%;
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
    
    </style>
    