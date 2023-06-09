package com.wooseung.hancook.api.controller;

import com.wooseung.hancook.api.request.FoodRecordRequestDto;
import com.wooseung.hancook.api.response.BaseResponseBody;
import com.wooseung.hancook.api.response.FoodNutrientResponseDto;
import com.wooseung.hancook.api.response.FoodRecordResponseDto;
import com.wooseung.hancook.common.auth.UserDetails;
import com.wooseung.hancook.api.service.FoodRecordService;
import com.wooseung.hancook.db.entity.User;
import com.wooseung.hancook.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/record")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FoodRecordController {

    private final FoodRecordService foodRecordService;
    private final UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<BaseResponseBody> registerFoodRecord(@RequestBody FoodRecordRequestDto foodRecordRequestDto, @AuthenticationPrincipal UserDetails userDetails, @RequestParam("cnt") int cnt) {
        foodRecordService.insertFoodRecord(foodRecordRequestDto, userDetails.getEmail(), cnt);
        return new ResponseEntity<>(new BaseResponseBody("SUCCESS", 201), HttpStatus.CREATED);
    }

    @GetMapping("/get")
    public ResponseEntity<List<FoodRecordResponseDto>> getFoodRecordByUser(@AuthenticationPrincipal UserDetails userDetails) {
        System.out.println("userDetails.getEmail : " + userDetails.getEmail());
        Optional<User> user = userRepository.findByEmail(userDetails.getEmail());
        List<FoodRecordResponseDto> list = foodRecordService.getFoodRecordById(user.get().getId());
        System.out.println("list.size : " + list.size());
        if(!list.isEmpty()) {
            System.out.println("list.get(0) : " + list.get(0));
        }
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

}
