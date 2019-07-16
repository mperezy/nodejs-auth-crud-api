$(document).ready(() => {
    let editButton = $(".editButton");
    let deleteButton = $(".deleteButton");
    let action = "";
    let task = "";

    //edit
    let editModal = $("#editModal");

    //delete
    let deleteModal = $("#deleteModal");

    editButton.click(() => {
        let _this = $(event.target);
        action = _this.data("action");
        task = _this.data("task").split("#");

        $("#formModal").attr("action", action + task[0]);
        $("input[name='titleModal']").val(task[1]);
        $("textarea[name='descriptionModal']").val(task[2]);

        editModal.modal("show");
    });

    deleteButton.click(() => {
        let _this = $(event.target);
        action = _this.data("delete");

        $("#deleteButtonModal").attr("href", action);

        deleteModal.modal("show");
    });
});