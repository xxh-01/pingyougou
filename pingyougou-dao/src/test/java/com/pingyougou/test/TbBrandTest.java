package com.pingyougou.test;

import com.pingyougou.mapper.TbBrandMapper;
import com.pingyougou.pojo.TbBrand;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring/applicationContext-*.xml")
public class TbBrandTest {

    @Resource
    private TbBrandMapper tbBrandMapper;

    @Test
    public void findAll(){
        List<TbBrand> tbBrandList = tbBrandMapper.selectByExample(null);
        for (TbBrand tbBrand : tbBrandList) {
            System.out.println(tbBrand);
        }
    }
}
