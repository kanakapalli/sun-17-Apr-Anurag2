


import '../App.css';

function Dropdown(prop) {
    const title = prop.title;
  return (
       <div class="dropdown">
  <span>{title}</span>
  <div class="dropdown-content">
 <p>option 1</p>
  <p>option 2</p>
  <p>option 3</p>
  </div>
</div>
  );
}

export default Dropdown;
