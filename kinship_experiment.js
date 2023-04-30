
function on_start(){
  d3.selectAll("circle")
    .style("visibility", "hidden");
  d3.selectAll("path")
    .style("visibility", "hidden")
  //document.getElementById('sub_select').disabled=true;
  document.getElementById('sub_select').style.visibility ='hidden';
  document.getElementById('sub_select').style.visibility ='hidden';
  document.getElementById('e_trial_button').style.visibility='hidden';
  document.getElementById('Example_Shown_Text').style.display='none';
  document.getElementById('Selection_Shown_Text').style.display='none';
};
window.onload = on_start;
var no_trials = 5

var selected = [];
var members = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
                "p", "q", "r", "s", "t", "Xa", "Xb", "Xc", "Xd", "Xe", "Xf", "Xg", "Xh", "Xi",
                "Xj", "Xk", "Xl", "Xm", "Xn", "Xo", "Xp", "Xq", "Xr"];

var words = ["dax", "zerg"];

var trial_order =[];

function randomize(values) {
  let index = values.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (index != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;

    // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }

  return values;
}

for (let i = 0; i < no_trials; i++) {
  words.forEach(function(item, index){
  trial_order.push(item)
  });
}

randomize(trial_order);
console.log(trial_order);



var dax=["a", "a", "a", "b", "b"];
var zerg=["c", "Xl", "Xp", "Xq", "c"];


current_trial = 0
dax_trial = 0
zerg_trial = 0

dax_trial_data=[]
zerg_trial_data=[]

function example_trial(){
  var word = trial_order[current_trial]
  if(word=="dax"){
      demo_member=dax[dax_trial]
  }else{
      demo_member=zerg[zerg_trial]
  }
  d3.selectAll("circle")
    .style("stroke", "silver");
  document.getElementById("trial_word_1").innerHTML = word
  var connections1 = svg.append("g").selectAll("path")
                                .data(information.links());
            connections1.enter().append("path")
                .attr("d", function(d){
                    return "M" + (d.source.x-20) + "," + d.source.y + "h 60 v 50 H" +
                    d.target.x + "V" + d.target.y;
                })
                .classed("hide", function(d){
                    if(d.source.id=="link")
                        return true;
                    else
                        return false;
                });

            var connections2 = svg.append("g").selectAll("path")
                                .data(information.links());
            connections2.enter().append("path")
                .attr("d", function(d){
                    return "M" + (d.source.x+40) + "," + d.source.y + "h 40";
                })
                .classed("hide", function(d){
                    if(d.source.id=="link")
                        return true;
                    else
                        return false;
                });
                
            var connections3 = svg.append("g").selectAll("path")
                                .data(information.links());
            connections3.enter().append("path")
                .attr("d", function(d){
                    return "M" + (d.source.x-20) + "," + d.source.y + "h 60 v 50 H" +
                    (d.target.x-600) + "V" + d.target.y
                })
                .classed("hide", function(d){
                    if (d.target.id != "l")
                        return true;
                    else
                        return false;
                })
                ;

            var circles = svg.append("g").selectAll("circle")
                            .data(information.descendants());
            circles.enter().append("circle")
                .attr("cx", function(d){return d.x-5;})
                .attr("cy", function(d){return d.y-20;})
                .attr("r", "30")
                .classed("male", function(d){
                    if (d.data.gender == "m")
                        return true;
                    else
                        return false;
                })
                .classed("ego", function(d){
                    if(d.data.ego == "T")
                    return true;
                    else
                    return false;
                })
                .classed("hide", function(d){
                    if (d.data.child == "link")
                        return true;
                    else
                        return false;
                })
                .classed("data_demo", function(d){
                    if(d.data.child == demo_member)
                        return true;
                    else
                        return false;
                })


            var spouseCircles = svg.append("g").selectAll("circle")
                                    .data(information.descendants());
            spouseCircles.enter().append("circle")
                .attr("cx", function(d){return d.x+90;})
                .attr("cy", function(d){return d.y-20;})
                .attr("r", "30")
                .classed("hide", function(d){
                    if(d.data.spouse == undefined)
                        return true;
                    else
                        return false;    
                })
                .classed("male", function(d){
                    if (d.data.spouse_gender == "m")
                        return true;
                    else
                        return false;
                })
                .classed("data_demo", function(d){
                    if(d.data.spouse == demo_member)
                        return true;
                    else
                        return false;
                });
  document.getElementById('intro_button').style.visibility = 'hidden';
  document.getElementById('Example_Shown_Text').style.display = "block";
  document.getElementById('Introduction').style.display = 'none';
  document.getElementById('e_trial_button').style.visibility= "visible";
  document.getElementById('Selection_Shown_Text').style.display='none';
};

function selection_trial(){
  selected = []
  disable_select = true
  var word = trial_order[current_trial]
  document.getElementById("trial_word_2").innerHTML = word
  //while (selected.length == 0){
    //document.getElementById("sub_select").disabled = true; 
  //}
  d3.selectAll("circle")
    .style("stroke", "silver");
  var connections1 = svg.append("g").selectAll("path")
                                .data(information.links());
            connections1.enter().append("path")
                .attr("d", function(d){
                    return "M" + (d.source.x-20) + "," + d.source.y + "h 60 v 50 H" +
                    d.target.x + "V" + d.target.y;
                })
                .classed("hide", function(d){
                    if(d.source.id=="link")
                        return true;
                    else
                        return false;
                });

  var connections2 = svg.append("g").selectAll("path")
                      .data(information.links());
            connections2.enter().append("path")
                .attr("d", function(d){
                    return "M" + (d.source.x+40) + "," + d.source.y + "h 40";
                })
                .classed("hide", function(d){
                    if(d.source.id=="link")
                        return true;
                    else
                        return false;
                });
              
  var connections3 = svg.append("g").selectAll("path")
                      .data(information.links());
          connections3.enter().append("path")
              .attr("d", function(d){
                  //console.log(d)
                  return "M" + (d.source.x-20) + "," + d.source.y + "h 60 v 50 H" +
                  (d.target.x-600) + "V" + d.target.y
              })
              .classed("hide", function(d){
                  if (d.target.id != "l")
                      return true;
                  else
                      return false;
              })
              ;

  var circles = svg.append("g").selectAll("circle")
                  .data(information.descendants());
          circles.enter().append("circle")
              .attr("cx", function(d){return d.x-5;})
              .attr("cy", function(d){return d.y-20;})
              .attr("r", "30")
              .classed("male", function(d){
                  if (d.data.gender == "m")
                      return true;
                  else
                      return false;
              })
              .classed("ego", function(d){
                  if(d.data.ego == "T")
                  return true;
                  else
                  return false;
              })
              .classed("hide", function(d){
                  if (d.data.child == "link")
                      return true;
                  else
                      return false;
              })
              .on("click", function(e, d){
                  d3.select(this)
                  if (selected.includes(d.data.child)){
                      const index = selected.indexOf(d.data.child);
                      selected.splice(index, 1)
                      //console.log(selected)
                      d3.select(this)
                      .style("stroke-width", "2")
                      .style("stroke", "silver")
                  } else if (d.data.child != "X"){
                      selected.push(d.data.child)
                      //console.log(selected)
                      d3.select(this)
                      .style("stroke-width", "5")
                      .style("stroke", "black")
                  }    
          
          
      })

  var spouseCircles = svg.append("g").selectAll("circle")
                          .data(information.descendants());
          spouseCircles.enter().append("circle")
              .attr("cx", function(d){return d.x+90;})
              .attr("cy", function(d){return d.y-20;})
              .attr("r", "30")
              .classed("hide", function(d){
                  if(d.data.spouse == undefined)
                      return true;
                  else
                      return false;    
              })
              .classed("male", function(d){
                  if (d.data.spouse_gender == "m")
                      return true;
                  else
                      return false;
              })        
              .on("click", function(e, d){
                  d3.select(this)
                  if (selected.includes(d.data.spouse)){
                      const index = selected.indexOf(d.data.spouse);
                      selected.splice(index, 1)
                      //console.log(selected)
                      d3.select(this)
                      .style("stroke-width", "2")
                      .style("stroke", "silver")
                  } else{
                      selected.push(d.data.spouse)
                      //console.log(selected)
                      d3.select(this)
                      .style("stroke-width", "5")
                      .style("stroke", "black")
                  }    
              });
  document.getElementById('e_trial_button').style.visibility= 'hidden';
  document.getElementById('Selection_Shown_Text').style.display = 'block';
  document.getElementById('sub_select').style.visibility = 'visible';
  document.getElementById('selection_fail').style.visibility = 'hidden';
  document.getElementById('Example_Shown_Text').style.display = "none";
  
};

function next_trial(){
  if (selected.length ==0){
    document.getElementById('selection_fail').style.visibility = 'visible';
  }else{
    var word = trial_order[current_trial]
    if(word=="dax"){
        specific_word_trial=dax_trial
    }else{
        specific_word_trial=zerg_trial
    }
    let current_trial_data = {
        "specific_word_trial":specific_word_trial+1,
        "overall_trial":current_trial+1,
        "demo":demo_member,
        "selected":selected
    };
    
    if(word=="dax"){
        dax_trial_data.push(current_trial_data)
        dax_trial+=1
        console.log(dax_trial_data)
    }else{
        zerg_trial_data.push(current_trial_data)
        zerg_trial+=1
    }
    current_trial+=1
    if (current_trial<trial_order.length){
        example_trial()
        document.getElementById('sub_select').style.visibility = 'hidden';
    } else{
        d3.selectAll("circle")
        .style("visibility", "hidden");
        d3.selectAll("path")
        .style("visibility", "hidden")
        document.getElementById('Selection_Shown_Text').style.display = 'none';
        document.getElementById('sub_select').style.visibility = 'hidden';
        const dax_trial_data_JSON = JSON.stringify(dax_trial_data);
        const zerg_trial_data_JSON = JSON.stringify(zerg_trial_data)
        console.log(dax_trial_data_JSON);
    }
  }
  

}



