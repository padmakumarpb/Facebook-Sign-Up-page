function button_click(click_val){
    console.log(click_val)
    document.getElementById("screen").value = document.getElementById("screen").value + click_val
}

function clear_display(){
    document.getElementById("screen").value = ""
}

function equalClick(){
    let text =  document.getElementById("screen").value
    let result = eval(text)
    document.getElementById("screen").value = result
}