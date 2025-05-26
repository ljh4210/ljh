function divideGroups() {
    const nameListTextarea = document.getElementById('name-list');
    const resultArea = document.getElementById('result-area');

    const names = nameListTextarea.value.split(',').map(name => name.trim()).filter(name => name !== '');

    if (names.length !== 39) {
        alert(`정확히 39명의 이름을 쉼표로 구분하여 입력해주세요. 현재 ${names.length}개의 이름이 감지되었습니다.`);
        return;
    }

    // 이름 목록을 무작위로 섞기
    for (let i = names.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [names[i], names[j]] = [names[j], names[i]];
    }

    const groupA = [];
    const groupB = [];

    // 번갈아 가면서 그룹 A와 B에 할당
    for (let i = 0; i < names.length; i++) {
        if (i % 2 === 0) {
            groupA.push(names[i]);
        } else {
            groupB.push(names[i]);
        }
    }

    // 그룹 결과를 화면에 표시
    resultArea.innerHTML = `
        <h2>그룹 결과</h2>
        <div class="groups-container">
            <div class="group">
                <h3>그룹 A</h3>
                <ul>${groupA.map(name => `<li>${name}</li>`).join('')}</ul>
            </div>
            <div class="group">
                <h3>그룹 B</h3>
                <ul>${groupB.map(name => `<li>${name}</li>`).join('')}</ul>
            </div>
        </div>
        <button onclick="resetGroups()">다시 나누기</button>
    `;

    resultArea.style.display = 'block';
}

function resetGroups() {
    const nameListTextarea = document.getElementById('name-list');
    const resultArea = document.getElementById('result-area');

    nameListTextarea.value = '';
    resultArea.innerHTML = ''; // 결과 내용 초기화
    resultArea.style.display = 'none';
}