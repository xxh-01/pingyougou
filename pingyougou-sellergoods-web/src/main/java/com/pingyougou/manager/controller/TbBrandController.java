package com.pingyougou.manager.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.pingyougou.pojo.TbBrand;
import com.pingyougou.sellergoods.TbBrandService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class TbBrandController {

    @Reference
    private TbBrandService tbBrandService;

    @ResponseBody
    @RequestMapping("/findAllTbBrand.do")
    public List<TbBrand> findAll() {

        return tbBrandService.findAll();
    }
}
