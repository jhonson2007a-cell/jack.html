class PriorityDemo extends Thread {
    public void run() {
        for(int i=1; i<=3; i++) {
            System.out.println(getName() + " Priority: " + getPriority() + " Iteration: " + i);
        }
    }
    public static void main(String[] args) {
        PriorityDemo t1 = new PriorityDemo();
        PriorityDemo t2 = new PriorityDemo();

        t1.setName("LowPriority");
        t2.setName("HighPriority");
        t1.setPriority(Thread.MIN_PRIORITY); // 1
        t2.setPriority(Thread.MAX_PRIORITY); // 10
        t1.start();
        t2.start();
    }
}
