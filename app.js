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