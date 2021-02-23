# Copyright (c) 2013 The Linux Foundation. All rights reserved.
#
include $(TOPDIR)/rules.mk

ARCH:=arm
BOARD:=ipq806x
BOARDNAME:=Qualcomm Atheros IPQ806X
FEATURES:=squashfs nand fpu ramdisk
CPU_TYPE:=cortex-a15
CPU_SUBTYPE:=neon-vfpv4
SUBTARGETS:=generic

KERNEL_PATCHVER:=5.4

KERNELNAME:=zImage Image dtbs

include $(INCLUDE_DIR)/target.mk
DEFAULT_PACKAGES += \
	kmod-leds-gpio kmod-gpio-button-hotplug swconfig nano exfat-mkfs kmod-qca-nss-crypto kmod-qca-nss-drv-pppoe kmod-qca-nss-drv-profile kmod-qca-nss-drv-tun6rd kmod-qca-nss-drv-tunipip6 kmod-qca-nss-drv-vlan-mgr luci-app-zerotier htop \
	kmod-ata-ahci kmod-ata-ahci-platform kmod-fs-exfat luci-app-ttyd kmod-qca-nss-drv kmod-qca-nss-drv-l2tpv2 \
	kmod-usb-ohci kmod-usb2 kmod-usb-ledtrig-usbport luci-app-cifsd kmod-qca-nss-drv-dtlsmgr kmod-qca-nss-gmac \
	kmod-phy-qcom-ipq806x-usb kmod-usb3 kmod-usb-dwc3-qcom fdisk exfat-fsck kmod-qca-nss-drv-gre luci-app-nps \
	luci-app-autoreboot kmod-nss-ifb kmod-qca-nss-cfi-cryptoapi kmod-qca-nss-drv-lag-mgr \
	uboot-envtools kmod-qca-nss-drv-qdisc kmod-qca-nss-ecm-standard kmod-usb-storage-extras kmod-usb-storage-uas

$(eval $(call BuildTarget))
