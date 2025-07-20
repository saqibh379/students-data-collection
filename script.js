document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
      name: formData.get("name"),
      studentID: formData.get("studentID"),
      groupMembers: formData.get("groupMembers"),
    };
  
    fetch("https://script.google.com/macros/s/AKfycbxxMqSnOveybmdoOFNPasnZYyraWWnRcwRQcB33D3DvoJ7gndp08liSEuy2A0YOIeWKsw/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  
    document.getElementById("message").innerText = "✅ Form submitted successfully!";
    this.reset();
  });
  