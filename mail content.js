let obj = [
    {
      name: "Manoj kumar",
      spantext: "hi",
      text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
      time: "4:01 am",
    },
    {
      name: "ipl",
      spantext: "today is 15th match",
      text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
      time: "10.10 pm",
    },
    {
      name: "amaozn",
      spantext: "You won 5200 voucher",
      text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
      time: "5.30  pm",
    },
    {
      name: "Flipkart",
      spantext: "offer 50%",
      text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
      time: "1:05 pm",
    },
    {
      name: "citistyle",
      spantext: "item 50% discount",
      text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
      time: "09:57 am",
    },
    {
      name: "mesho",
      spantext: "discount on cream",
      text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy dellorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
      time: "05336 pm",
    },
    
  ];
  
  
  
  function mailbox(obj) {
    let p = document.createElement("div");
    p.className = "inbox-message-item message-default-unread";
  
    p.innerHTML = `<div class="checkbox" style="margin-right: -12px;">
                  <button class="btn">
                      <img src="./app/assets/icons/check_box_outline_blank_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon">
                  </button>
              </div>
              <div class="message-group-hidden">
                  <button class="btn-alt btn-nofill drag-indicator">
                      <img src="./app/assets/icons/drag_indicator_black_24dp.svg" alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled">
                  </button>
              </div>
              <div>
                  <button class="btn star" style="margin: 0;">
                      <img src="./app/assets/icons/star_border_black_24dp.svg" alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon">
                  </button>
              </div>
              <div class="message-default">
                  <div class="message-sender message-content">
                      <span>${obj.name}</span>
                  </div>
                  <div class="message-subject message-content">
                      <span class="spantext">${obj.spantext}</span>
                  </div>
                  <div class="message-seperator message-content"> - </div>
                  <div class="message-body message-content">
                      <span>${obj.text}</span>
                  </div>
                  <div class="gap message-content"> &nbsp; </div>
                  <div class="message-date center-text">
                      <span class="span-time">${obj.time}</span>
                  </div>
              </div>
              <div class="message-group-hidden">
                  <div class="inbox-message-item-options">
                      <button class="btn">
                          <img src="./app/assets/icons/archive_black_24dp.svg" alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover">
                      </button>
                      <button class="btn delete-btn">
                          <img src="./app/assets/icons/delete_black_24dp.svg" alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover">
                      </button>
                      <button class="btn">
                          <img src="./app/assets/icons/mark_as_unread_black_24dp.svg" alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover">
                      </button>
                      <button class="btn">
                          <img src="./app/assets/icons/access_time_filled_black_24dp.svg" alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover">
                      </button>
                  </div>
              </div>`;
  
    let mailbox = document.getElementById("mailss");
  
    
    mailbox.appendChild(p);
  }
  
  obj.forEach((objItem) => {
    mailbox(objItem);
  });
  
  
  
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
      button.addEventListener('click', function() {
          this.closest('.message-default-unread').style.display = 'none';
      });
  });
  