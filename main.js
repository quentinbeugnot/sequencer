const seq = document.getElementById('seq');
const track1_instr = document.getElementById('track1_instr');
const track1_seq = document.getElementById('track1_seq');

function ShowInstr_1(){
  seq.style.display = "none";
}

function ShowSeq_1(){
  seq.style.display = "grid";
}

track1_instr.addEventListener('click',ShowInstr_1);
track1_seq.addEventListener('click',ShowSeq_1);