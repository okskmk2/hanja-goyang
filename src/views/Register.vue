<template>
    <div style="width:30rem; margin: 0 auto;">
        <div class="title-bar">
            <h1>시험접수</h1>
            <div class="actions">
                <button>수정</button>
            </div>
        </div>
        <section>
            <div class="input-group">
                <label for="" class="input-label">급수</label>
                <select name="" id="">
                    <option value="9">9급</option>
                    <option value="8">8급</option>
                    <option value="7">7급</option>
                    <option value="6">6급</option>
                    <option value="5">5급</option>
                    <option value="4">4급</option>
                </select>
            </div>
            <div class="input-group">
                <label for="" class="input-label">이름</label>
                <input type="text">
            </div>
            <div class="input-group">
                <label for="" class="input-label">생년월일</label>
                <input type="text">
            </div>
            <div class="input-group">
                <div class="input-label">성별</div>
                <label>남자<input type="radio" name="sex" value="male"></label>
                <label style="margin-left:8px">여자<input type="radio" name="sex" vale="female"></label>
            </div>
            <div class="input-group">
                <label for="" class="input-label">주소</label>
                <input type="text">
            </div>
            <div class="actions">
                <button class="btn primary">접수하기</button>
            </div>
        </section>
    </div>
</template>