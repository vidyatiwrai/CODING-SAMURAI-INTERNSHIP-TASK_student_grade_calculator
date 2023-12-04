document.addEventListener('DOMContentLoaded', function() {
    updateResult(); // Display initial result when the page loads
});

function calculateGrades() {
    var studentName = document.getElementById('studentName').value;
    var mathScore = parseFloat(document.getElementById('math').value);
    var scienceScore = parseFloat(document.getElementById('science').value);
    var englishScore = parseFloat(document.getElementById('english').value);

    // Calculate total, average, and grade
    var totalScore = mathScore + scienceScore + englishScore;
    var averageScore = totalScore / 3;
    var grade = calculateGrade(averageScore);

    // Update result values
    document.getElementById('studentResult').textContent = studentName;
    document.getElementById('mathResult').textContent = isNaN(mathScore) ? '' : mathScore;
    document.getElementById('scienceResult').textContent = isNaN(scienceScore) ? '' : scienceScore;
    document.getElementById('englishResult').textContent = isNaN(englishScore) ? '' : englishScore;
    document.getElementById('totalResult').textContent = isNaN(totalScore) ? '' : totalScore;
    document.getElementById('averageResult').textContent = isNaN(averageScore) ? '' : averageScore.toFixed(2);
    document.getElementById('gradeResult').textContent = grade; // Fixed this line
}

function updateResult() {
    // Display initial result with empty values
    document.getElementById('studentResult').textContent = '';
    document.getElementById('mathResult').textContent = '';
    document.getElementById('scienceResult').textContent = '';
    document.getElementById('englishResult').textContent = '';
    document.getElementById('totalResult').textContent = '';
    document.getElementById('averageResult').textContent = '';
    document.getElementById('gradeResult').textContent = '';
}

function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
