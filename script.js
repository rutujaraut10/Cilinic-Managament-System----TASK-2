let tokenCounter = 1;

// Get latest token from Firestore on load
db.collection("patients")
  .orderBy("token", "desc")
  .limit(1)
  .get()
  .then(snapshot => {
    if (!snapshot.empty) {
      tokenCounter = snapshot.docs[0].data().token + 1;
      document.getElementById("tokenDisplay").textContent = tokenCounter - 1;
    }
  })
  .catch(error => {
    console.error("Error loading token:", error);
  });

function addPatient() {
  const name = document.getElementById("patientName").value.trim();
  const symptoms = document.getElementById("symptoms").value.trim();
  const prescription = document.getElementById("prescription").value.trim();

  if (!name || !symptoms || !prescription) {
    alert("Please fill all fields.");
    return;
  }

  db.collection("patients").add({
    name,
    symptoms,
    prescription,
    token: tokenCounter,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    document.getElementById("tokenDisplay").textContent = tokenCounter;
    tokenCounter++;
    alert("Patient record added!");

    // Clear fields
    document.getElementById("patientName").value = "";
    document.getElementById("symptoms").value = "";
    document.getElementById("prescription").value = "";
  })
  .catch((error) => {
    console.error("Error adding patient:", error);
    alert("Error saving patient.");
  });
}
