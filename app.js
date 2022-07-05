// Changing the text with the Data.json file
const fetchData = async () => {
    const response = await fetch('data.json');
    const newRes = await response.json();
    handleUserActivity(newRes);
  };
  const handleUserActivity = (activities) => {

    // Buttons variables
    const timeSelect = document.querySelectorAll(".select");
    let selected = 1;
    // Text variables
    const workText = document.getElementById('work-text');
    const workLw = document.getElementById('work-lw');

    const playText = document.getElementById('play-text');
    const playLw = document.getElementById('play-lw');

    const studyText = document.getElementById('study-text');
    const studyLw = document.getElementById('study-lw');

    const exerciseText = document.getElementById('exercise-text');
    const exerciseLw = document.getElementById('exercise-lw');

    const socialText = document.getElementById('social-text');
    const socialLw = document.getElementById('social-lw');

    const selfCareText = document.getElementById('self-care-text');
    const selfCareLw = document.getElementById('self-care-lw');

    // Add the ative class to the clicked button
for(let i =0;i<timeSelect.length;i++){
    timeSelect[i].addEventListener("click",()=>{
        timeSelect[selected].classList.remove("active");
        selected = i;
        timeSelect[i].classList.add("active");

        if(selected === 0){
            workText.innerHTML = activities[0].timeframes.daily.current + "hrs"
            workLw.innerHTML = "Last day - " + activities[0].timeframes.daily.previous + "hrs"

            playText.innerHTML = activities[1].timeframes.daily.current + "hrs"
            playLw.innerHTML = "Last day - " + activities[1].timeframes.daily.previous + "hrs"

            studyText.innerHTML = activities[2].timeframes.daily.current + "hrs"
            studyLw.innerHTML = "Last day - " + activities[2].timeframes.daily.previous + "hrs"

            exerciseText.innerHTML = activities[3].timeframes.daily.current + "hrs"
            exerciseLw.innerHTML = "Last day - " + activities[3].timeframes.daily.previous + "hrs"

            socialText.innerHTML = activities[4].timeframes.daily.current + "hrs"
            socialLw.innerHTML = "Last day - " + activities[4].timeframes.daily.previous + "hrs"

            selfCareText.innerHTML = activities[5].timeframes.daily.current + "hrs"
            selfCareLw.innerHTML = "Last day - " + activities[5].timeframes.daily.previous + "hrs"
        }
        else if(selected === 1){
            workText.innerHTML = activities[0].timeframes.weekly.current + "hrs"
            workLw.innerHTML = "Last week - " + activities[0].timeframes.weekly.previous + "hrs"

            playText.innerHTML = activities[1].timeframes.weekly.current + "hrs"
            playLw.innerHTML = "Last week - " + activities[1].timeframes.weekly.previous + "hrs"

            studyText.innerHTML = activities[2].timeframes.weekly.current + "hrs"
            studyLw.innerHTML = "Last week - " + activities[2].timeframes.weekly.previous + "hrs"

            exerciseText.innerHTML = activities[3].timeframes.weekly.current + "hrs"
            exerciseLw.innerHTML = "Last week - " + activities[3].timeframes.weekly.previous + "hrs"

            socialText.innerHTML = activities[4].timeframes.weekly.current + "hrs"
            socialLw.innerHTML = "Last week - " + activities[4].timeframes.weekly.previous + "hrs"

            selfCareText.innerHTML = activities[5].timeframes.weekly.current + "hrs"
            selfCareLw.innerHTML = "Last week - " + activities[5].timeframes.weekly.previous + "hrs"
        }
        else{
            workText.innerHTML = activities[0].timeframes.monthly.current + "hrs"
            workLw.innerHTML = "Last month - " + activities[0].timeframes.monthly.previous + "hrs"

            playText.innerHTML = activities[1].timeframes.monthly.current + "hrs"
            playLw.innerHTML = "Last month - " + activities[1].timeframes.monthly.previous + "hrs"

            studyText.innerHTML = activities[2].timeframes.monthly.current + "hrs"
            studyLw.innerHTML = "Last month - " + activities[2].timeframes.monthly.previous + "hrs"

            exerciseText.innerHTML = activities[3].timeframes.monthly.current + "hrs"
            exerciseLw.innerHTML = "Last month - " + activities[3].timeframes.monthly.previous + "hrs"

            socialText.innerHTML = activities[4].timeframes.monthly.current + "hrs"
            socialLw.innerHTML = "Last month - " + activities[4].timeframes.monthly.previous + "hrs"

            selfCareText.innerHTML = activities[5].timeframes.monthly.current + "hrs"
            selfCareLw.innerHTML = "Last month - " + activities[5].timeframes.monthly.previous + "hrs"
        }
    })
}   
}
  fetchData();