class Stack {
    constructor() {
        this.items = [];
    }

    // Thêm phần tử vào đỉnh stack
    push(element) {
        this.items.push(element);
    }

    // Lấy phần tử ở đỉnh stack ra
    pop() {
        if (this.isEmpty()) {
            return "Stack đang trống!";
        }
        return this.items.pop();
    }

    // Xem phần tử ở đỉnh mà không xóa
    peek() {
        if (this.isEmpty()) {
            return "Stack đang trống!";
        }
        return this.items[this.items.length - 1];
    }

    // Kiểm tra stack có rỗng không
    isEmpty() {
        return this.items.length === 0;
    }

    // Lấy số lượng phần tử
    size() {
        return this.items.length;
    }
}
class Queue {
    constructor() {
        this.items = [];
    }

    // Thêm phần tử vào cuối hàng đợi
    enqueue(element) {
        this.items.push(element);
    }

    // Lấy phần tử ở đầu hàng đợi ra
    dequeue() {
        if (this.isEmpty()) {
            return "Queue đang trống!";
        }
        return this.items.shift();
    }

    // Xem phần tử ở đầu hàng đợi mà không xóa
    front() {
        if (this.isEmpty()) {
            return "Queue đang trống!";
        }
        return this.items[0];
    }

    // Kiểm tra hàng đợi có rỗng không
    isEmpty() {
        return this.items.length === 0;
    }

    // Lấy số lượng phần tử
}
// Khởi tạo một đối tượng Stack mới cho ứng dụng
const myStack = new Stack();

// Hàm xử lý sự kiện khi bấm nút Push trên giao diện
function handlePush() {
    const inputElement = document.getElementById("stackInput");
    const value = inputElement.value.trim();

    if (value === "") {
        alert("Vui lòng nhập giá trị vào ô!");
        return;
    }

    // Gọi phương thức push từ Backend
    myStack.push(value);
    
    // Xóa ô nhập liệu sau khi thêm
    inputElement.value = "";
    
    // Cập nhật lại giao diện hiển thị Stack
    renderStack();
}

// Hàm xử lý sự kiện khi bấm nút Pop trên giao diện
function handlePop() {
    if (myStack.isEmpty()) {
        alert("Stack đang trống, không thể Pop!");
        return;
    }

    myStack.pop();
    renderStack();
}

// Hàm render (vẽ lại) các phần tử Stack ra màn hình
function renderStack() {
    const container = document.getElementById("stackContainer");
    container.innerHTML = ""; // Xóa nội dung cũ

    // Lặp qua các phần tử trong Stack để hiển thị (phần tử đỉnh nằm trên cùng)
    for (let i = myStack.items.length - 1; i >= 0; i--) {
        const itemDiv = document.createElement("div");
        itemDiv.className = "stack-item";
        itemDiv.innerText = myStack.items[i];
        container.appendChild(itemDiv);
    }
}