const seq = document.getElementById('seq');
const track1_instr = document.getElementById('track1_instr');
const track1_seq = document.getElementById('track1_seq');

function ShowInstr_1(){
  seq.style.display = "none";
  track1_instr.classList.add("selected-tab");
  track1_seq.classList.remove("selected");
}

function ShowSeq_1(){
  seq.style.display = "grid";
  track1_seq.classList.add("selected");
  track1_instr.classList.remove("selected-tab");
}

track1_instr.addEventListener('click',ShowInstr_1);
track1_seq.addEventListener('click',ShowSeq_1);