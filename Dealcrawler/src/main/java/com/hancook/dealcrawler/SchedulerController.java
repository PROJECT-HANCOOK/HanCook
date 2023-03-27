package com.hancook.dealcrawler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

@Slf4j
@Controller
public class SchedulerController {

    // Everyday 00:01:00 starts crawling
    @Scheduled(cron = "00 30 13 * * *")
    public void scheduler() {
        Runnable runnable = null;
        for (int i = 0; i < 20; i++) {
            runnable = new com.hancook.dealcrawler.MultiCrawler(i * 500, i);
            Thread t = new Thread(runnable);
            t.start();
        }
    }
}


