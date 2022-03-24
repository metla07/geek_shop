<template>

  <form action="#" name="form" id="form">
    <h2>Форма</h2>
    <label name="form" class="label_form">Данные клиента :</label>
    <label name="input_form_name" class="label_form">Введите имя
      <input type="text"
             required
             pattern="[A-Z][A-z]+"
             placeholder="Введите имя"
             autocomplete="off"
             class="input_form"
             name="input_form_name">
    </label>
    <label name="input_form_last_name" class="label_form">Введиде фамилию
      <input type="text"
             required
             autocomplete="off"
             pattern="[A-Z][A-z]+"
             placeholder="Введите фамилию"
             class="input_form"
             name="input_form_last_name">
    </label>
    <label name="input_form_email" class="label_form">Введите имейл
      <input type="email"
             required
             autocomplete="off"
             placeholder="Введите имейл"
             class="input_form"
             name="input_form_email">
    </label>
    <div>
    <label for="checkbox_m"> М
      <input type="radio"
             class="type"
             id="checkbox_m"
             name="gender_selection"
             checked>
    </label>
    <label for="checkbox_f"> Ж
      <input type="radio"
             class="type"
             id="checkbox_f"
             name="gender_selection">
    </label>
    </div>
    <button type="submit" id="btn">Отправить</button>

  </form>
</template>
<script>
export default {

}
</script>
<style>
#form {
  margin-top: 79px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
}
h2 {
  margin-bottom: 100px;
}
.input_form {
  margin: 10px 0 0 20px;
  border: 2px solid black;
  border-radius: 10px 10px;
  padding: 5px;
  height: 20px;
  width: 300px;
  font-size: 16px;
  box-shadow: 0 1px 5px 0 black;
}
.input_form:hover {
  border: 2px solid grey;
  box-shadow: 0 1px 5px 0 grey;
}
.input_form:focus-visible {
  border: 2px solid grey;
  box-shadow: 0 1px 5px 0 grey;
  outline: none;
}
.input_form:valid {
  box-shadow: 0 1px 5px 0 green;
  border: 2px solid green;
}
.input_form:focus-visible:invalid {
  box-shadow: 0 1px 5px 0 red;
  border: 2px solid red;
}
label[name="input_form_name"] {
  width: 400px;
}
label[name="input_form_last_name"] {
  width: 400px;
}
label[name="input_form_email"] {
  width: 400px;
}
label[name="form"] {
  font-size: 28px;
  margin-top: -10px;
}
.label_form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  letter-spacing: 0.06em;
  text-shadow: 1px 2px 2px green;
}

#btn {
  margin-top: 10px;
  padding: 4px 10px;
  background-color: grey;
  border-radius: 8px;
  outline: none;
  border: none;
  box-shadow: 0 2px 3px 1px black;

}
#btn:hover {
  background-color: lightgray;

}
#btn:active {
  background-color: dimgray;
  box-shadow: 0 2px 3px 1px white;
}
@media (max-width: 980px) {
  #form {
    margin: 220px 0 0 0;
  }
}
@media (max-width: 415px) {
.label_form {
  width: 400px;
 margin: 0;
}
}
</style>